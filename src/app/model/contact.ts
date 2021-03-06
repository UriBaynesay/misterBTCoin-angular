export class Contact {
  constructor(
    public name: string = "",
    public email: string = "",
    public phone: string = "",
    public imgUrl?: string,
    public _id?: string
  ) {}

  setId?() {
    var txt = ""
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    this._id = txt
  }
}
