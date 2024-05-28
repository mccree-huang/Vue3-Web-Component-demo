Web Components demo project
Vue3 + Vite + TypeScript + vaadin components  

这是一个Vue3+Vite+Typescript项目，将整个项目打包成一个web component组件 最终输出一个 my-app的自定义标签，使用route属性
呈现不同的页面内容，为了开发方便，引入了名为vaadin的第三方的web components库

If your requirement is to package the entire Vue project into a single web component,
and for convenience, you also want to use some pre-packaged web component libraries to assist your development, 
then you can refer to this demo.

[Third-party component library](https://vaadin.com/components)


If you need to preview and develop locally, you can try the following steps: first, 
run `npm install`,
then run `npm run dev`.


If you need to build it into a web component, first execute `npm run build`, 
then you can import the built JS file into any `index.html` file.
After that, 
you can preview it by using a custom tag `<my-app route="home-page-com" />`.
