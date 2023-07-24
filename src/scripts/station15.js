async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: "優", family_name: "大木", affiliation: "TechTrain", is_student: false },
    { id: 2, first_name: "太郎", family_name: "山田", affiliation: "HogeHoge大学", is_student: true },
  ];
  // userListの各要素に対してtest関数を呼び出してPromiseの配列を作る
  const promises = userList.map(test);
  // Promise.allで全てのPromiseがresolveされるまで待つ
  const results = await Promise.all(promises);
  // resultsを返す
  return results;
}

function test(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // data["full_name"]=data["family_name"]
      // data.full_name=data.family_name+" "+data.first_name;
      // data自体ではなく、dataのコピーを作ってfull_nameを設定する
      const newData = { ...data, full_name: data.family_name + " " + data.first_name };
      resolve(newData);
    }, 3000);
  });
}

