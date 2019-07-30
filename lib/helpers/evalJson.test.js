import { evalJson } from './evalJson';

describe('evalJson Helper', () => {
  let sample;
  beforeEach(() => {
    sample = {
      glossary: {
        title: 'example glossary',
        GlossDiv: {
          title: 'S',
          GlossList: {
            GlossEntry: {
              ID: 'SGML',
              SortAs: 'SGML',
              GlossTerm: 'Standard Generalized Markup Language',
              Acronym: 'SGML',
              Abbrev: 'ISO 8879:1986',
              GlossDef: {
                para: 'A meta-markup language, used to create markup languages such as DocBook.',
                GlossSeeAlso: ['GML', 'XML'],
              },
              GlossSee: 'markup',
            },
          },
        },
      },
    };
  });

  it('tests for valid json', () => {
    const isValid = evalJson(sample);
    expect(isValid).toEqual(sample);
  });
});
