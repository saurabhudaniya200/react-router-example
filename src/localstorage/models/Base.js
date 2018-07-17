class Base {
  constructor (collectionName) {
    this.collectionName = collectionName;
  }

  save (object) {
    object['id'] = this.nextId();
    let data = this.collectionData();
    data.unshift(object);
    this.updateCollectionData(data);
    return object;
  }

  getByKey (key, value) {
    return this.collectionData().filter((object) => object[key] === value);
  }

  update (newEntry) {
    this.removeByKey('id', newEntry.id);
    this.save(newEntry);
  }

  removeByKey (key, value) {
    const data = this.collectionData().filter((object) => object[key] !== value);
    this.updateCollectionData(data);
  }

  removeAll () {
    localStorage.removeItem(this.collectionName);
  }

  all (value) {
    return value == null ? this.collectionData() : (this.collectionData().filter((object) =>
      object.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    ));
  }

  find (value) {
    return this.getByKey('id', value)[0];
  }

  nextId () {
    return this.collectionData().length + 1;
  }

  updateCollectionData (data) {
    localStorage.setItem(this.collectionName, JSON.stringify(data));
  }

  collectionData () {
    const data = JSON.parse(localStorage.getItem(this.collectionName));
    return data == null ? [] : data;
  }

  alert(message) {
    
  }
}

export default Base;
