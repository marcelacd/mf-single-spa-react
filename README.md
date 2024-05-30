## Single SPA - enfoque Multi Repo

## Pasos para crear los microfrontends

1.  Configurar el Proyecto Principal (root-config)
```console
npx create-single-spa
```
![image](https://github.com/marcelacd/mf-single-spa-react/assets/111938782/268dc11a-d148-48b7-ad8e-5008573da2be)

2. Crear el microfrontend de utilidades
```console
npx create-single-spa
```
![image](https://github.com/marcelacd/mf-single-spa-react/assets/111938782/c72b8192-f3dc-465b-9c2d-8d17abe7daa2)

3. Crear las Aplicaciones
```console
npx create-single-spa
```
![image](https://github.com/marcelacd/mf-single-spa-react/assets/111938782/d72d783f-fca7-49f3-91cd-b59cdc89379e)

4. Configura los puertos de los 4 microfrontend que creaste e importalos en el Shell (index.ejs)
   
   NOTA: Si se crearon aplicaciones en react se deben añadir las importaciones de react y react-dom
```javascript
<script type="systemjs-importmap">
      {
        "imports": {
          "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
          "react": "https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js",
          "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js",
          "@todo/root-config": "//localhost:9001/todo-root-config.js",
          "@todo/listTodo": "//localhost:8500/todo-listTodo.js",
          "@todo/utils": "//localhost:8502/todo-utils.js"
        }
      }
</script>
```
