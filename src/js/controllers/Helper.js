const { shell } = window.require('electron');

export default new class Helper {
  getDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = day + '-' + month + '-' + year;
    return newdate;
  }

  generateUUID() {
    var d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  upgrade() {
    shell.openExternal('https://rockstagram.app/get-pro.html');
  }

  website() {
    shell.openExternal('https://rockstagram.app/');
  }
}();
