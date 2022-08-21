class Hoster {
  constructor() {
    localStorage.setItem("zov", "");
  }

  readLocal() {
    let dataFromStore = localStorage.getItem("zov");
    return dataFromStore;
  }

  writeLocal(data) {
    let getData = this.readLocal();
    console.log(getData, "getData");
    if (getData !== "") {
      let oldString = JSON.parse(getData);
      let newObj = { ...oldString, ...data };
      console.log(newObj);
      localStorage.setItem("zov", JSON.stringify(newObj));
    } else {
      localStorage.setItem("zov", JSON.stringify(data));
    }
  }

  clearData() {
    localStorage.setItem("zov", "");
  }
}

const Starter = new Hoster();
