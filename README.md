### NextJS14

基本動作は同じ

### テンプレート文字列の生成資源

[create-message-formatter](https://github.com/blackraccoon000/create-message-formatter)

[generate-types](https://github.com/blackraccoon000/generate-types)

### formatMessage の動作

`src/constants`ディレクトリの`templates.ts`を元に`npm run generate-type`で型ファイルを生成できる

### react 配下での実装例

```typescript
import {templates} from "@/constants/templates";
import {formatMessage} from "@/lib/formatMessage";

const Home = () => {
  const a = formatMessage(templates.a, "test", "Tokyo");
  const b = formatMessage(templates.d.g, "test");
  return (
    <div>
      Home {a} {b}
    </div>
  );
};

export default Home;
```
