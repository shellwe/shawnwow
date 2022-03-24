/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Qualifications {
    constructor(
      // Defines parameters:
      qualification,
      company,
      category,
      importance,
    ) {
      // Define properties:
      this.qualification = qualification;
      this.company = company;
      this.category = category;
      this.importance = importance;
    }
  }
  
  export default Qualifications;
  