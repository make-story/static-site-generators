# 정적페이지 생성 - Vuepress 기반

- 기존 동적컨텐츠 최적화 일부 방식  
Memcached 등 인메모리 캐시에 동적 컨텐츠를 캐싱하고, 이를 제공하는 형태  
또는 바니시(Varnish) 소프트웨어를 활용한 캐시(동적 컨텐츠를 캐싱, HTTP만을 지원)서버 활용
  
- 동적컨텐츠를 미리 정적컨텐츠로 생성하여, CDN 등 프록시 서버의 캐시활용  
동적컨텐츠를 Vuepress 등의 도구를 통해 정적페이지로 생성하고, 이를 캐시에 올려두고 사용하자는 개념  
  
> Vuepress 는 `cache-loader`를 사용함  
https://github.com/webpack-contrib/cache-loader  
  

# 배포
https://vuepress.vuejs.org/guide/deploy.html  
```
$ vuepress build
```
