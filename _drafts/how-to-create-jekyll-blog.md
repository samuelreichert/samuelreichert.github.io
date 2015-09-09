---
layout: post
title:  Como eu criei meu blog usando Jekyll
date:   2015-09-09 01:18:20
author: Samuel Reichert
categories: ["programming"]
image: jekyll-logo.png
---


Eu sempre tive vontade de ter e manter um blog, já tentei ter blogs em ferramentas como tumblr ou blogspot, porém sem conteúdo eu acabava por deixar o blog de lado. Há pouco tempo atrás descobri o Jekyll e tive vontade de criar um blog novamente.

O que me deixava frustrado nos blogs que eu criava era a "limitação" em personalizá-los e modificar seus layouts (essa limitação se dava porque eu não sabia como modificar ou criar meus próprios layouts).

Então, pouco tempo atrás me deparei com uma postagem no tableless sobre [como criar um blog usando Octopress][octopress]{:target="_blank"} e descobri que o Octopress na verdade usa jekyll. Pesquisei e estudei sobre ele, como funciona, e descobri que era o que eu estava procurando pra começar um blog!

Há mais ou menos uns três meses atrás comecei a desenvolver este blog com Jekyll e agora quero compartilhar como criar um blog como este, como criar um primeiro post e como publicar o blog no github pages para que todos possam ver o blog.

Tenha em mente aprender alguns comandos básicos de git, aprender a customizar páginas HTML e códigos CSS, e umas aulas básicas sobre linha de comando, antes de começar este tutorial. Alguns sites interessantes e gratuitos para aprender tudo isso e um pouco mais são o [Code School][codeschool]{:target="_blank"} e o [Codecademy][codecademy]{:target="_blank"}.

#### Instalação
Antes de instalar o jekyll alguns pré-requisitos são necessários: 

* Instale o [Ruby][ruby]{:target="_blank"};
* Instale o [RubyGems][rubygems]{:target="_blank"};
* Instale o [Git][git]{:target="_blank"};

Após ter instalado os pré-requisitos acima utilize o seguinte comando no `prompt` (em OSX ou Linux), ou no `cmd` (em Windows) para instalar o jekyll:

`$ gem install jekyll`

Pronto, se as instalações deram certo agora você tem tudo o que precisa para criar um blog com jekyll.

#### Criar o blog
Agora, ainda pelo `prompt`, siga estes 3 passos para ter o blog criado

1. Para criar o seu blog: digite o comando `jekyll new my-blog`, troque o 'my-blog' pelo nome que você deseja que seu blog tenha.
2. Entre na pasta criada: digite o comando `cd my-blog`, dentro desta pasta estão todos arquivos iniciais gerados pelo jekyll para o seu blog, incluindo um primeiro post.
3. Para testar seu novo blog: digite o comando `jekyll serve`, que irá iniciar um servidor local, e irá lhe indicar para acessar `127.0.0.1:4000` no navegador para visualizar, você pode usar também `localhost:4000`. Para parar o servidor é só clicar o comando `Ctrl + C` no `prompt`

#### Customizando
Agora que o blog foi gerado pelo jekyll você tem toda liberdade de mudar as configurações, trocar o tema do blog, adicionar plugins, para isso é só ler a [documentação do jekyll][jekylldocs]{:target="_blank"}, que mostra de forma simples como fazer tudo isso.

#### Criar o primeiro post
Para criar um post, o jekyll segue um padrão bem simples:

* Dentro da pasta `_posts` ficam todos os posts que aparecem no seu blog.
* Dentro da pasta `_drafts` ficam os posts que já foram escritos mas que você ainda não quer que apareçam no blog.
* Os posts são escritos no formato de markdown, se não sabe o que é isso, dê uma lida rápida aqui - [Markdown na wikipédia][mdwiki]{:target="_blank"}.
* Para criar um post basta criar um novo arquivo com o seguinte formato de nome: `ANO-MES-DIA-titulo.md`, um exemplo poderia ser `2015-01-01-primeiro-post.md` (atenção à extensão do arquivo, por padrão é utilizado `.md`, porém se você decidir por trocar nas configurações os seus posts também deverão mudar para a opção selecionada).
* Front Matter: Isso que faz o jekyll começar a ser interessante, poder definir variáveis. No jekyll o padrão para definir as váriaveis é sempre no início do arquivo, como no exemplo abaixo.

{% highlight text %}
---
layout: post
title: Primeiro Post
---
{% endhighlight %}

#### Publicar seu blog ( GitHub Pages! )
Os sites criados com jekyll já são pensados para serem publicados no github pages, e o melhor disso é que o github pages é totalmente gratuito!

Antes de poder publicar seu site no github pages você deve ter criado uma conta pessoal no [GitHub][github]{:target="_blank"}.

O seu username é importante para publicar seu blog no github pages, com o github aberto crie um novo repositório e coloque o seguinte padrão: `seu_username.github.io`, se o seu username for blogdosamuel, o repositório vai se chamar `blogdosamuel.github.io`.

Depois de criar o repositório siga o tutorial que o github irá lhe passar para que você publique seu blog.

Publicar seu blog no github pages é importante porque só assim ele ficará visível para o público. 

#### Resumo
O Jekyll foi feito pensando em ser customizado, isso quer dizer que é possível utilizá-lo não só para criar um blog, mas também para uma página pessoal, tipo um currículo, ou aquele site estático que seu parente vive pedindo para você fazer. Pense em aprender a usar o jekyll e você pode ter uma ótima experiência.

Links:

* [Criando um blog com octopress e github][octopress]{:target="_blank"}
* [Site oficial Code School][codeschool]{:target="_blank"}
* [Site oficial Codecademy][codecademy]{:target="_blank"}
* [Site oficial do Ruby][ruby]{:target="_blank"}
* [Site oficial RubyGems][rubygems]{:target="_blank"}
* [Site oficial Git][git]{:target="_blank"}
* [Documentação oficial Jekyll][jekylldocs]{:target="_blank"}
* [Markdown na wikipédia][mdwiki]{:target="_blank"}
* [Site oficial GitHub][github]{:target="_blank"}

[octopress]: http://tableless.com.br/criando-um-blog-com-octopress-e-github-pages/
[codeschool]: https://www.codeschool.com/
[codecademy]: https://www.codecademy.com/pt
[ruby]: https://www.ruby-lang.org/en/downloads/
[rubygems]: https://rubygems.org/pages/download
[git]: https://git-scm.com/
[jekylldocs]: http://jekyllrb.com/docs/home/
[mdwiki]: https://pt.wikipedia.org/wiki/Markdown
[github]: https://github.com/
