<div align="right">
  <a href="README.md">
    <img alt="Ler em PortugΓͺs do Brasil" src="https://img.shields.io/static/v1?label=&message=Ler+em+Portugu%C3%AAs+do+Brasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/74S5zBF/manage-file.png"></td>
    <td>  
      <h1>@desco/promise-loop</h1>
      Package that allows you to perform a loop where, each position waits for the solution of a promise in the previous position, returning the original list with all the answers.
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 1.0.0" src="https://img.shields.io/static/v1?label=Version&message=1.0.0&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        π Ready to use! π
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## π Table of Contents

- [βοΈ Installation](#Installation)
- [π¦ Import](#Import)
- [π How to use](#How-to-use)

---

<a name="Installation"></a>

## βοΈ Installation

```bash
npm install --save @desco/promise-loop
```

> Note that it will be necessary to have **NPM** installed for the command to work.

---

<a name="Import"></a>

## π¦ Import

### Node

```js
const promiseLoop = require("@desco/promise-loop");
```

### Browse

```js
import promiseLoop from "@desco/promise-loop";
```

---

<a name="How-To-Use"></a>

## π How to use

```js
const list = [1, 2, 3, 4, 5, 6];
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

const fun = (v, k) => Promise.resolve(v % 2 === 0);

promiseLoop(list, fun).then((result) => console.log(result)); // [ false, true, false, true, false, true ]
promiseLoop(obj, fun).then((result) => console.log(result)); // { a: false, b: true, c: false, d: true, e: false, f: true }
```

---

## Author

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
