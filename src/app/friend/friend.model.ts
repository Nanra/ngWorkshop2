export class Friend {

  // Deklarasi Variabel
  public name: string;
  public email: string;
  public contact: string;

  // Konstruktur untuk ambil data saat instansiasi object
  constructor( name: string, email: string, contact: string ) {
    this.name = name;
    this.email = email;
    this.contact = contact;
  }
}
