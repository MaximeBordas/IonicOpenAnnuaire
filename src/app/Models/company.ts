export class Company {
  siren: string;
  name: string;
  address: number;
  postal_code: string;
  city: string;
  category: string;
  activity: string;
  effectif: string;
  startDate: string;
  coordonnees: {};

  constructor(siren, name, address, postal_code, city, category, activity, effectif, startDate, coordonnees) {
    this.siren = siren;
    this.name = name;
    this.address = address;
    this.postal_code = postal_code;
    this.city = city;
    this.category = category;
    this.activity = activity;
    this.effectif = effectif;
    this.startDate = startDate;
    this.coordonnees = coordonnees;
  }

  getExportData() {
    return {
      siren: this.siren,
      name: this.name,
      address: this.address,
      postal_code: this.postal_code,
      city: this.city,
      category: this.category,
      activity: this.activity,
      effectif: this.effectif,
      startDate: this.startDate,
    }
  }
}
