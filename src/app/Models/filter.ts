export class Filter {
  name: string;
  operator: string;
  multiple = true;
  values: string[] = [];
  needName: boolean;

  constructor(name: string, operator: string, multiple = true, needName: boolean) {
    this.name = name;
    this.operator = operator;
    this.multiple = multiple;
    this.needName = needName;
  }

  addValue(value: string) {
    if (this.multiple) {
      this.values.push(value);
    } else if (value.trim()) {
      this.values = [value];
    } else {
      this.values = [];
    }
  }

  removeValue(value: string) {
    this.values.splice(this.values.indexOf(value), 1);
  }

  getFormattedValues() {
    return this.values.map(value => {
      return this.needName ? this.name + this.operator + value : value;
    });
  }
}
