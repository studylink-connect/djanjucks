import djanjucks from '../../src';

describe('dictsort filter', () => {
  it('sorts an array by key', () => {
    const result = djanjucks.renderString(
      '{% for person in people|dictsort:"name" %}{{ person.age }}{% endfor %}',
      {
        people: [
          { age: 23, name: 'Barbara-Ann' },
          { age: 63, name: 'Ra Ra Rasputin' },
          { name: 'Jonny B Goode', age: 18 }
        ]
      }
    );
    expect(result).toEqual('231863');
  });

  it('sorts an array by key with dot notation', () => {
    const result = djanjucks.renderString(
      '{% for book in books|dictsort:"author.age" %}{{ book.author.name }}{% endfor %}',
      {
        books: [
          { title: '1984', author: { name: 'George', age: 45 } },
          { title: 'Timequake', author: { name: 'Kurt', age: 75 } },
          { title: 'Alice', author: { name: 'Lewis', age: 33 } }
        ]
      }
    );
    expect(result).toEqual('LewisGeorgeKurt');
  });

  it('sorts arrays of arrays by index', () => {
    const result = djanjucks.renderString(
      '{% for items in list|dictsort:"0" %}{% for item in items %}{{ item }}{% endfor %}{% endfor %}',
      {
        list: [['a', '42'], ['c', 'string'], ['b', 'foo']]
      }
    );
    expect(result).toEqual('a42bfoocstring');
  });

  it('leaves keys that are identical in the original order', () => {
    const result = djanjucks.renderString(
      '{% for person in people|dictsort:"name" %}{{ person.age }}{% endfor %}',
      {
        people: [
          { age: 23, name: 'John' },
          { age: 63, name: 'John' },
          { age: 18, name: 'John' }
        ]
      }
    );
    expect(result).toEqual('236318');
  });
});
