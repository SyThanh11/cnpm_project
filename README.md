# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
## Setup ngay sau khi clone project lần đầu
### Setup các thư viện cho project
Do việc push kèm thư mục node_modules (thư mục chứa các thư viện cho NodeJS và ReactJS) sẽ khiến project trở nên rất nặng (thư mục node_modules của ReactJS có dung lượng loanh quanh 300-400 MB), cũng như git sẽ không thể track được toàn bộ thay đổi.

Do đó, hai thư mục node_modules của NodeJS và ReactJS đã phải được đưa vào .gitignore.

Vì thế, ngay sau khi clone project này về lần đầu tiên, các thành viên vui lòng tiến hành cài đặt lại các thư viện này. Cụ thể như sau:

Với NodeJS, mở terminal và gõ:
```
npm install
```
Các thư viện cần thiết cho ReactJS sẽ được cài đặt.
## Khởi chạy web
Sau khi clone project này, mở terminal tại thư mục mà project được clone (nếu đang ở thư mục views thì phải quay ra thư mục cha nha) và gõ:
```
npm start
```
Trang [localhost:3000](http://127.0.0.1:3000/) sẽ khởi chạy tự động trên trình duyệt mặc định của máy sau vài giây nếu việc thiết lập thành công.

Lời cuối, chúc tất cả một ngày tốt lành!
