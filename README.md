## Server

<!-- 
git checkout --orphan temp; git add -A; git commit -am "initial commit"; git branch -D dev; git branch -m dev; git push -f origin dev
-->

<!--
git checkout --orphan temp; git rm -rf .; git commit --allow-empty -m "inital commit"; git branch -D main; git branch -m main; git push -f origin main
-->

<!-- HISTORY
git config user.name "test"
git config user.email "test@github.com"
git checkout --orphan temp
git add -A
git commit -am "initial commit"
git branch -D 2022
git branch -m 2022
git push -f origin 2022
-->

<!-- CLOUDFLARE
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

1. assuming you already have your domain, will use domain.com as example and you have your github pages, will use username.github.io as example
2. register for cloudflare account
3. get cloudflare nameservers for your domain, e.g xxx.ns.cloudflare.com and yyy.ns.cloudflare.com
4. update dns settings for your domain with the cloudflare nameservers and check status (might take a while) 
5. cloudflare dns settings -> add A record - name: domain.com, value 185.199.[108-111].153; and AAAA record: value 2606:50c0:[8000-8003]::153 as per github pages instructions
6. cloudflare dns settings -> add cname record; name www, value (is an alias of) username.github.io
7. cloudflare page rules -> domain.com/* forwarding URL https://www.domain.com/$1 301 permanent redirect
8. cloudflare page rules -> http://www.domain.com/* Always use https
9. settings on your github pages repo -> custom domain 'www.domain.com' 
-->
