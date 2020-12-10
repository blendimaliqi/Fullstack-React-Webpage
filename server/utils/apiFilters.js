// GJENBRUKT FRA FORELESERS EKSEMPLER
export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  /** GJENBRUKT FRA FORELESERS EKSEMPLER, OG TILPASSET VÅRT BRUK
   * Filter: fjerner andre parametere fra url før
   * den kjører find på query.
   * EKS: articles?category=5fc947236985b30b4c726bf9
   */
  filter() {
    const query = { ...this.queryStr };
    const removeFields = ['q', 'page', 'limit'];
    removeFields.forEach((el) => delete query[el]);

    this.query = this.query.find(query);
    return this;
  }

  /** GJENBRUKT FRA FORELESERS EKSEMPLER OG TILPASSET VÅRT BRUK
   *  Søke filter: lar deg utføre søk på eksakte ord eller
   *  fraser. (Forutenom såkalte stoppord, disse blir filtrert
   *  ut av MongoDb, tar ikke i betraktning store/små bokstaver
   *  (case-insensitive)). EKS: articles?q=søkeord
   */
  searchByQuery() {
    if (this.queryStr.q) {
      const term = this.queryStr.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${term}"` } });
    }
    return this;
  }

  /** GJENBRUKT FRA FORELESERS EKSEMPLER OG TILPASSET VÅRT BRUK
   * Pagineringsfilter, kalkulerer hvor mange eks artikler
   * som skal skippes basert på hvilken page og limit
   * som settes (EX: page=3 og limit=5 -> skip =10. Skipp 10
   * resultater for å gi meg side 3, som inneholder 5 artikler)
   * EKS: articles?limit=5&page=2
   */
  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 1;
    const limit = parseInt(this.queryStr.limit, 10) || 5;
    const skipResults = (page - 1) * limit;
    this.query = this.query.skip(skipResults).limit(limit);
    return this;
  }
}
