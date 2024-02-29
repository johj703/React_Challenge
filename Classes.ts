type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {}
}

class Dict {
  // 문자로 된 키, 값 모양이란 것을 알려준다!
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 1. add: 단어를 추가함.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // 2. get: 단어의 정의를 리턴함.
  get(term: string) {
    return this.words[term];
  }
  // 3. delete: 단어를 삭제함.
  delete(word: Word) {
    if (this.words[word.term]) delete this.words[word.term];
  }
  // 4. update: 단어를 업데이트 함.
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
  // 5. showAll: 사전 단어를 모두 보여줌.
  showAll() {
    return Object.keys(this.words).forEach((term) => console.log(term));
  }
  // 6. count: 사전 단어들의 총 개수를 리턴함.
  count() {
    const dicCount = Object.keys(this.words).length;
    return dicCount;
  }
  // 7. upsert: 단어를 업데이트 함. 존재하지 않을시, 이를 추가함(update + insert = upsert)
  upsert(word: Word) {
    this.words[word.term] = word.def;
  }
  // 8. exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(term: string) {
    if (this.words[term]) {
      return true;
    } else {
      return false;
    }
  }
  // 9. bulkAdd: 다음과 같은 방식으로 여러 개의 단어를 한 번에 추가할 수 있게 해줌.
  // [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
  bulkAdd(bulk: Word[]) {
    bulk.forEach((word: Word) => {
      if (this.words[word.term] === undefined) this.words[word.term] = word.def;
    });
  }
  // 10. bulkDelete: 다음과 같은 방식으로 여러 개의 단어를 한 번에 삭제할 수 있게 해줌.
  // ["김치", "아파트"]
  bulkDelete(bulk: string[]) {
    bulk.forEach((word: string) => {
      if (this.words[word]) delete this.words[word];
    });
  }
}
