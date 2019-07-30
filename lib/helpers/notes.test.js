import { getNoteReadStatus } from './notes';

describe('lib notes', () => {
  it('getNoteReadStatus()', () => {
    const note = {
      id: 'noteId1',
      dateCreated: '2018-02-13T18:09:34.685Z',
      employee: {
        pernr: 'pernr2'
      }
    };
    const relationships = {
      sinceDate: new Date('2018-02-13T18:09:34.685Z')
    };
    const currentUser = {
      pernr: 'pernr1'
    };
    expect(getNoteReadStatus(note, relationships, currentUser)).toEqual('UNREAD');
  });
});
