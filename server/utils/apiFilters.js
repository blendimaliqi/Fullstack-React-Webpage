export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 3;
    const limit = parseInt(this.queryStr.limit, 10) || 5;
    const skipResults = (page - 1) * limit;
    this.query = this.query.skip(skipResults).limit(limit);
    return this;
  }
}
