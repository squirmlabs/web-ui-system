/**
 * Generate random data for use in examples.
 */
export function generateRandomList() {
  const list = [];

  for (var i = 0; i < 1000; i++) {
    list.push({
      color: BADGE_COLORS[i % BADGE_COLORS.length],
      index: i,
      first_name: RESULTS[i % RESULTS.length].employee.first_name,
      id: RESULTS[i % RESULTS.length].id,
      last_name: RESULTS[i % RESULTS.length].employee.last_name,
      slug: RESULTS[i % RESULTS.length].subject,
      editorState: RESULTS[i % RESULTS.length].text,
      size: ROW_HEIGHTS[Math.floor(Math.random() * ROW_HEIGHTS.length)]
    });
  }

  return list;
}

const BADGE_COLORS = [
  '#f44336',
  '#3f51b5',
  '#4caf50',
  '#ff9800',
  '#2196f3',
  '#374046',
  '#cddc39',
  '#2196f3',
  '#9c27b0',
  '#ffc107',
  '#009688',
  '#673ab7',
  '#ffeb3b',
  '#cddc39',
  '#795548'
];

const ROW_HEIGHTS = [120, 150, 200];

export const isDraftable = content => {
  return typeof content === 'object' && content.hasOwnProperty('entityMap');
};

export function evalJson(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}

const RESULTS = [
  {
    id: '03496da0-02ff-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"foca5","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T01:11:32.986Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: {
      pernr: '01215190',
      first_name: 'William',
      last_name: 'Quach',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-18T23:43:43.254+0000',
      last_modified_gmt: '2018-01-18T23:43:43.254+0000',
      organizational_unit_name: 'MN -  Software Engineering 2',
      title: 'Senior Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings: null,
      email: 'WILLIAM.L.QUACH@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCABIAEgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAUGBwgJAwIE/8QAORAAAQMDBAAEBAQEBAcAAAAAAQIDBAUGEQAHEiEIEzFBCSJRYRQVcYEjJDIzUmKh8BZCU5GxweH/xAAcAQACAgMBAQAAAAAAAAAAAAAFBgQHAgMIAAH/xAAxEQABAwMCBAMIAQUAAAAAAAABAgMRAAQFIUESMVFhBpGhBxMicYGxwfAUI2LC0fH/2gAMAwEAAhEDEQA/AMurnvi2JEaE9bsSoRZIbWJ0abIS6lByOKkKCUqyQDnI/TSW3eCnBk96bEik3NTlNNTaDKRIlkrZi+SpTzo9SrgkEgY91Y17DE9piQmppFPfjkZizElK1ZHtgH/ZGiKiSOPbtUdITMCl+ReCwf7f+o13p9wxWH26lcsVYipPJtpEpLK3jgjolJOO/UDTYtpifcVag0ClRPPm1GWiPFQVfKFqUAM/uf8AsDrRnaLwnbB7K2vHdrluRLjuMoCp1XqbQWS5jsNoPTaB6BI9vUk6wddQwniVrUm2s3bxfCjTvWf9evuqurUaTbzDEb0S4GXlkH7rWs/6AaS6dd9SmPMR59bDKFrAkvNxgVMpJxy4+p679BrSStwrHLoLdqU1KAf7Yhox+mMab9/bR7B73WbIsy57CplIqSm1/ll0UuElqVEeI+VSlJx5reccm1ZBTnGDgiO3ftOqhSYqa9h3mEcSVTHaqSvi0yx5ULeVJd48f5qkDievUFCv/P76a8656vbFXbpL1ViVhgoSoPMK4Epyeif+VXXuD7aTNxrRvHbu7p9m3DGZjzadKXGlNHJAWg45JPukjCkn3SoHSe5U4yYiHEQWULyQ6l75s/cEDrUwaHWhU0941z0qe02sOLYcWDyYfWgkHPsUn5hjHfR+w0aYzdZQt9udHgxSlk/O28ylYPp6/X98++jX0JBrGT0rvNvmqsVFZgXC/KbS4UJWoZQtJxk/Qgn0z9Bn21zapN13q5MnQFSn/wAEwlyc+lWGYzZUEgrX0lAKiAMnsnHrrQ+xPgOXTSYtIVuxEk1t+QtJkNWncCEtAhQK0vuPttpjt8CRybDyyQQkZ1ZGxPgoeCa2aMzKv3Z4T6ip0qciRrtqD8ZBJPFpKnFIW7gdFSgnPZ4pGk+78ZYOzSClZWf7QD+RTLb+GctcKhQCR3P/AGsxNlNir3283YgW7d1Jbbq8RqJLZjtTWXxxktpfaX5jK1o/tKSojlkZwcEECym8vi7b2yqLltUiyFVSbHYQZMyXMCGApQBwjGeQx3nPf00s73bDWBN8XUyqWRTjQbep7a6TNt9eHAt2EDGTISpRUfJX5YSEq7JbySQcaYW/fgwjXe+Lmj30rDw5rE4JKAAAMpSMAdAD9sdaKtXrF82245pKQY6T9a2N429slONo5g+dcbH8T9R3NhzJKKD5DkRvzXW0K5pTj2BwM/8A3TcV40rqi15ykt2XTHobKylxua+pDxP2xjH7acewvhutO0Ikqu1S4ESGJcJ9lp5SghpST8hUnvKu8jPp0cajed4OH61XlOQ68ykccoEhIKlI9OSVchkEg9jXmjbJdJnTatjycgtpKd96bfiylW/e9ww913Yj7UKs06OEuIV/Q6jLRStQ6KvlA77OE6hyXRoHDzqHVQ6c48la05P6YPr+2rkVqxXdntvE0lFVq9Zfkwnmfy6DKEZp1PJLpDy05JCeCiknkAokkH2jiqbU7VOWtEqe5t7CkT3XsIpUcRaqSlPYLqovleSkgHClZP0HWs1XyG3eGT95+nP60FcxF0o+8Jj7efKqyTIrsOX5a1eW8e+Kz/70a0E3R+EvN3atOBvV4b2qPb9Il05l1236guetHID+JIBkN+eltWCUpQ04CPQkHlo1tZzGPeRPvNRoR0Na14u8bVHD5VpVuF40drKLAfa2/hP1ipkYjJfYVHj8vqokhZH2SO/qPXUdQN1vGTubLQu07beKFHCfyuhqbQAfbzVn5R9wofc6sxN8O8zZimJqVxb0beWiFqHlLi7bRy712Q35sjks/sdfO+za9xUV5+oeK3dSY3xCS7QqRS6MyUn2SXGB0R1nkftqombW3SmWmgruqT/jHrVjOXbpV8a47CB+az93t2quTau96n/xlKjTqtU0iZVZFPlploZVyJ4vOJ6bd5LWeP0UD99QpvXMqsq218ZrqmGgDIbbJzwHZAx9daW7vbO+EK09sayu39o5M2c/S3mWnqpekmoymnXGlBLwYZeUglJIWSflGMke2s0YlYMp/wDIqy2ErCQhxSj66dLFx5bPxpjhjYCfoCaHP3HvFTPP91qN6ZSY24MJNxWVt9X56Cz5SZ8QpZSUBQBSkK748iPX9caSqTMFvXREs+mQarTak3/EMWcCeLJUQo8gSAnIPXXepIvOhzqWtCaFR46lE98mElKvv6eukg0w0eivVqrttsvKAHJDaU/oABoqXGynTeoq0cCAeLX971bn4Vey1TvrcSqbt1ylKk0ugxHoUR6VHDjLsp9CUrbAVkEpaJJ6OAsfXV6aZsvt5T2RGgbXW9EaEjzwWKDFSEuY4+YAlv8Ar49cvXGqzeE/xVbHeGzw62vtmyinya0qGZ9dZm3KxRpC5j58xfFFTSwl5KUltAU0tYIQCOQIOp5snxL3LecJuVB2Hr4Q4jmZkav0yRDCVL4o/jIewCfuAMnon11WucZv7i+U6pJSnkJMSBvz350esnrdLAQDJ5neJqRpNIo0mOlifDakNJTwLMppK0hJ+XGFD0x1j6aNJS7k3JBQZ2w10qCVBRSw5BXnHpnD/f10aBhlxO/qP91NLqelV23P+JTLcr70O3Lbte02XFq816k0vlKUO0kfiX+TikkepSRxII61BG5FC3D3YqUG42fz2qVNmY4lbVRrE1Tn4cnkhag46EENg8T1/UPTGBqHfDzth4qPETSJF33ZtU3YdGltrVTKnc8rkuWhXIeYqL066BkY+RCFcelD1NjKDKjbSWpT9uq5dsa6qkp1MpUuZETBS+62olKmY6VqHyEjGVLIwDgavvB+zjxddXDToIQg81LIOnZI1+Q0B01jWqCyXiW0tQrjcKlDYTz77fPenW7K2wte3KsL7fjTKz+CU5Haclulx1IQEJAwQDhw9/QHJ61Sfde2Eur/ABVJV5b7fotPvqfd56Q9fdqSJNCS41UIx/EQkoUVYdSDlJH0UMpI+4PtqvE+53KlEbck8kKV0sK9Uq9CCPYg9aLeM8AvA3qENglsjQnmTuDoNfwaYPBeYay1i4tZ/qTqNgNo7c6i+4Lo3UgumniWstpOBlOev114oEa6ayPPr01a0NgqS2onGcfTTluBxDjylIcAWPf3189KaUpsNNq5KUcEY9vfSmlZIgCmhbcGSa0t27+JJvrZNEt3a6bSod323AsyIyumXPb7cxDTiUIQEoeWnJR5YxxyQCAM6ZG9fxK/DlT9vH4tL8Bti2xdz8txqc6qnN/gls8iA4I7aGzyXjlhxSkgdjPWqzbfQXfFZbU/bq9rtlwa1acwNUSsturKA1wBZQ+2FDmgBWP8SSkkH21Cm+tnS9pX4it5q07UauppafyKnqWFTngs8VpcX35RRgrc44/w5J7YLzw3b/xmrl1oKQrUKEgT0InQjpv3pNtsxeMvuMNOlLgPCU7x1B3B9O2lW68KvxG9t7m3WpW3G7VmUim23NkBp+t0eDydpBV0h7g/5qSyDgLQEDCSVDsYJqklC3CuV0uNTbZoNMgoZLnkwoKkLR10StSypw/Uq7P20aW7zAYe7d40lSOyYj1B9KMtZnMWCeByFTr8R1+4rS259wZNZllyROWpXocq9NR7uDbcO9oAp9TUslp0OMuIVhTagchSSOwR9Ro0a67MTG1UABvTOv8Ao+9Bp6YdsbsOU5hxPFyfHpLK5qDjoeYsFJT9+HL/ADHUDXheNU2tqEOgb2VSqViRLcdVLuORFQoOKKh5bnJAClApPFSTkpKAU5BIBo0DzWLtMhblD4JB05n06EdR9pFFsPkLmwuUrZIBGvIa9j1HY/fWlYbf067YzNVoVUbdjvJC2X2XOSHE/UH/AH76cdobSxklyU/JDQbHFKVD0/zHRo1ztdWrVtkHGU6hKiBPY1fzDhuLFDquakg+Yp0WDsBce2O5KN1Lfuxks1Vttit0mWSj+X5Di6no4WnPL2OMDOMgy1uZStn7jojFL3ipFDqENn5IyayUpdaX9WVghxCs/wDTIP66NGuh7CwtcfjUW7aZRAkHWZ5z8/KufcheXF7ki+tUKk6jSI5eXnVfah4FJjXihtW/bYkuVDbIy/PuGiSZAW9EU0hS22nM4U/Gdc8sFY+ZIBSsYIWTRo1R3tExtti82lFrKEqSDAMAGSNP30q1fCF49k8YXLmFKCok6mIHOv/Z',
      admin: false,
      preferredFirstname: 'William',
      preferredLastname: 'Quach'
    },
    isNew: false
  },
  {
    id: 'c65b6fb0-02fe-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"fkk9","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T01:09:50.763Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '8a385850-02fd-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"bmh2q","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T01:01:00.373Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'e763c650-02fc-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"4mhdu","text":"Teset","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T00:56:27.189Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '7fb48030-02fc-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"93dcj","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T00:53:33.235Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '6a89ccb0-02fc-11e8-abc8-4daa150d11e1',
    storyId: '65230c50-02fc-11e8-abc8-4daa150d11e1',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"bdifp","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Teset',
    dateCreated: '2018-01-27T00:52:57.723Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'eafed950-02fa-11e8-abc8-4daa150d11e1',
    storyId: 'bd6942a0-02d2-11e8-b3f2-7f9ff7fb3b06',
    storySlug: 'SAMPLE',
    text:
      '{"entityMap":{},"blocks":[{"key":"2iog3","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-27T00:42:14.245Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'bc0e7e80-02db-11e8-87b4-e9620d11574e',
    storyId: 'bd6942a0-02d2-11e8-b3f2-7f9ff7fb3b06',
    storySlug: 'SAMPLE',
    text:
      '{"entityMap":{},"blocks":[{"key":"142hq","text":"c","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'c',
    dateCreated: '2018-01-26T20:59:01.096Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'b36452f0-02db-11e8-87b4-e9620d11574e',
    storyId: 'bd6942a0-02d2-11e8-b3f2-7f9ff7fb3b06',
    storySlug: 'SAMPLE',
    text:
      '{"entityMap":{},"blocks":[{"key":"a98e1","text":"b","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'b',
    dateCreated: '2018-01-26T20:58:46.559Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '04432c30-02d9-11e8-87b4-e9620d11574e',
    storyId: 'bd6942a0-02d2-11e8-b3f2-7f9ff7fb3b06',
    storySlug: 'SAMPLE',
    text:
      '{"entityMap":{},"blocks":[{"key":"67ffe","text":"a","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'new note',
    dateCreated: '2018-01-26T20:39:33.747Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '95d21680-01fc-11e8-9f3e-038dd12299cc',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"eh7f0":{"key":"eh7f0","type":"unstyled","text":"Test","characterList":[{"style":[],"entity":null},{"style":[],"entity":null},{"style":[],"entity":null},{"style":[],"entity":null}],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"eh7f0","anchorOffset":0,"focusKey":"eh7f0","focusOffset":0,"isBackward":false,"hasFocus":true},"selectionAfter":{"anchorKey":"eh7f0","anchorOffset":4,"focusKey":"eh7f0","focusOffset":4,"isBackward":false,"hasFocus":true}},"lastModified":1516087404000,"lastModifiedDate":"2018-01-16T07:23:24.000Z","name":"0be387d1997153a9344f8be6f3f20204.jpg","size":40288,"thumbnailUrl":null,"type":"image/jpeg","uniqueKey":"1fff381e-a70c-442d-ad78-3a006b8191b3"}}},"blocks":[{"key":"eh7f0","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f30pe","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"b0doh","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"},{"offset":0,"length":4,"style":"ITALIC"},{"offset":0,"length":4,"style":"UNDERLINE"}],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-25T18:21:39.176Z',
    attachedFiles: [
      {
        id: '95d23d90-01fc-11e8-9f3e-038dd12299cc',
        awsKey: '15169044941850be387d1997153a9344f8be6f3f20204.jpg',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/15169044941850be387d1997153a9344f8be6f3f20204.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194457Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e5ce6c0eb92a79df961744c5ccd2c346c10f2816d9d4a9241ecf96a403bee1f2',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/15169044941850be387d1997153a9344f8be6f3f20204_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194457Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3d6056ed4b20c5aed28b01bddc955c7970b9fbcacdaee3ed8519e5ce1b305e93',
        fileName: '0be387d1997153a9344f8be6f3f20204.jpg',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'PENDING',
          isInfected: null
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'bf3ce250-fd0d-11e7-bc2e-abd1b1cc1075',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"7keiq","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-19T11:41:54.293Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '39297570-fd0d-11e7-bc2e-abd1b1cc1075',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"e7g38","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-19T11:38:09.351Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '759831f0-fbf4-11e7-8d71-43859c1ba6f2',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"d83q3":{"key":"d83q3","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"d83q3","anchorOffset":0,"focusKey":"d83q3","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"d83q3","anchorOffset":0,"focusKey":"d83q3","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516136090000,"lastModifiedDate":"2018-01-16T20:54:50.000Z","name":"new_update_message.png","size":148325,"thumbnailUrl":null,"type":"image/png","uniqueKey":"f1853761-c314-42db-99f6-3fc27df8ea6c"}}},"blocks":[{"key":"d83q3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5t3ja","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"367rj","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'a',
    dateCreated: '2018-01-18T02:08:22.159Z',
    attachedFiles: [
      {
        id: '759831f1-fbf4-11e7-8d71-43859c1ba6f2',
        awsKey: '1516241295431new_update_message.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516241295431new_update_message.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194501Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7196&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=28d71842c09ce3ca7c84424623a34a6fc0b47abbc19fb7f9e47eb25010611de1',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516241295431new_update_message_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194503Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7197&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ffdd94dea72fc85deeef1f4d18d2fb8b95c0f99865ee0fa38092296ebf2d80b2',
        fileName: 'new_update_message.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '01e471b0-fbf4-11e7-8d71-43859c1ba6f2',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"19vil":{"key":"19vil","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"19vil","anchorOffset":0,"focusKey":"19vil","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"19vil","anchorOffset":0,"focusKey":"19vil","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1515461015000,"lastModifiedDate":"2018-01-09T01:23:35.000Z","name":"Screen Shot 2018-01-08 at 5.23.30 PM.png","size":34107,"thumbnailUrl":null,"type":"image/png","uniqueKey":"0bc27711-7d40-4e2f-a94c-a41bb4bf09b9"}}},"blocks":[{"key":"19vil","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a0e4f","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"6vv69","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'f',
    dateCreated: '2018-01-18T02:05:08.043Z',
    attachedFiles: [
      {
        id: '01e471b1-fbf4-11e7-8d71-43859c1ba6f2',
        awsKey: '1516241107528Screen Shot 2018-01-08 at 5.23.30 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516241107528Screen%20Shot%202018-01-08%20at%205.23.30%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e7a2289a14c9640c2dc0712503621bc494966d22bbb4445fd1cc7b8b07eb3680',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516241107528Screen%20Shot%202018-01-08%20at%205.23.30%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f5b70b8b0e6bcc1136f64bdf5512a3a2a4982427700aa38e5f9c194889806ce9',
        fileName: 'Screen Shot 2018-01-08 at 5.23.30 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '6c1b5f00-fbf2-11e7-8d71-43859c1ba6f2',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"5gr07":{"key":"5gr07","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"5gr07","anchorOffset":0,"focusKey":"5gr07","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"5gr07","anchorOffset":0,"focusKey":"5gr07","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516136090000,"lastModifiedDate":"2018-01-16T20:54:50.000Z","name":"new_update_message.png","size":148325,"thumbnailUrl":null,"type":"image/png","uniqueKey":"affcd285-72ea-4bca-9509-e6551eb0d58f"}}},"blocks":[{"key":"5gr07","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"de8m9","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"lg2c","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'e',
    dateCreated: '2018-01-18T01:53:47.248Z',
    attachedFiles: [
      {
        id: '6c1b5f01-fbf2-11e7-8d71-43859c1ba6f2',
        awsKey: '1516240425605new_update_message.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516240425605new_update_message.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=0a421877b340282ad38c8fced6689b540190550643d875fe484a4acfec4eaead',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516240425605new_update_message_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=cd1fdd7e598a5b0d0a049ba9462e8215f38cd4575ff9902c003875036d21c7b0',
        fileName: 'new_update_message.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'a6adfd40-fbf1-11e7-954c-33ed6fd1148e',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"fp8gj":{"key":"fp8gj","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"fp8gj","anchorOffset":0,"focusKey":"fp8gj","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"fp8gj","anchorOffset":0,"focusKey":"fp8gj","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516150798000,"lastModifiedDate":"2018-01-17T00:59:58.000Z","name":"Screen Shot 2018-01-16 at 4.59.53 PM.png","size":192943,"thumbnailUrl":null,"type":"image/png","uniqueKey":"1520b691-6fdf-484a-a421-c59bdaed94cf"}}},"blocks":[{"key":"fp8gj","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6kc28","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"33uu8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'd',
    dateCreated: '2018-01-18T01:48:16.020Z',
    attachedFiles: [
      {
        id: 'a6adfd41-fbf1-11e7-954c-33ed6fd1148e',
        awsKey: '1516240095242Screen Shot 2018-01-16 at 4.59.53 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516240095242Screen%20Shot%202018-01-16%20at%204.59.53%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3005052624b58ec81159435049e65868a42a06b3d3a4c7884c56773fbb8c3b83',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516240095242Screen%20Shot%202018-01-16%20at%204.59.53%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=660e115ba593ae332504d68780fdce9594764ea3772c4ca21b1a37d2032108f2',
        fileName: 'Screen Shot 2018-01-16 at 4.59.53 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '62b79ce0-fbf1-11e7-954c-33ed6fd1148e',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"2rlk2":{"key":"2rlk2","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"2rlk2","anchorOffset":0,"focusKey":"2rlk2","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"2rlk2","anchorOffset":0,"focusKey":"2rlk2","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1515461015000,"lastModifiedDate":"2018-01-09T01:23:35.000Z","name":"Screen Shot 2018-01-08 at 5.23.30 PM.png","size":34107,"thumbnailUrl":null,"type":"image/png","uniqueKey":"872b03e5-d177-43fc-a3a0-2ab2afc2fd1e"}}},"blocks":[{"key":"2rlk2","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d71rf","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"4pbci","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'c',
    dateCreated: '2018-01-18T01:46:21.998Z',
    attachedFiles: [
      {
        id: '62b79ce1-fbf1-11e7-954c-33ed6fd1148e',
        awsKey: '1516239981390Screen Shot 2018-01-08 at 5.23.30 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239981390Screen%20Shot%202018-01-08%20at%205.23.30%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=bdad305fee0c3d196780bc5b624828be6cc7bc14bbdb1e0ea448c8c677d1e005',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239981390Screen%20Shot%202018-01-08%20at%205.23.30%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=30a1e1daf1da50a0b3d2584dcd2433247813e28ce07242016c5a044cb2320054',
        fileName: 'Screen Shot 2018-01-08 at 5.23.30 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '01173e00-fbf1-11e7-954c-33ed6fd1148e',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"7ue0k":{"key":"7ue0k","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"7ue0k","anchorOffset":0,"focusKey":"7ue0k","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"7ue0k","anchorOffset":0,"focusKey":"7ue0k","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516136090000,"lastModifiedDate":"2018-01-16T20:54:50.000Z","name":"new_update_message.png","size":148325,"thumbnailUrl":null,"type":"image/png","uniqueKey":"a7cf0bb1-0d49-4b7c-ab81-a2558c3b52ee"}}},"blocks":[{"key":"7ue0k","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1kg08","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"8edks","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'c',
    dateCreated: '2018-01-18T01:43:38.208Z',
    attachedFiles: [
      {
        id: '01173e01-fbf1-11e7-954c-33ed6fd1148e',
        awsKey: '1516239817481new_update_message.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239817481new_update_message.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e6904f2b2afa50a943e5918e067bedd8c4e0911c6d49b72b674f632a782d4c6b',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239817481new_update_message_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1e91227da71202ab94b208dbf87950e72ab6b9ec10f4ffb2acca95d2e9c98b57',
        fileName: 'new_update_message.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '6c605ea0-fbef-11e7-98f8-cbc1e8ec8c63',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"7a5eh":{"key":"7a5eh","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"7a5eh","anchorOffset":0,"focusKey":"7a5eh","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"7a5eh","anchorOffset":0,"focusKey":"7a5eh","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516150798000,"lastModifiedDate":"2018-01-17T00:59:58.000Z","name":"Screen Shot 2018-01-16 at 4.59.53 PM.png","size":192943,"thumbnailUrl":null,"type":"image/png","uniqueKey":"e7bd6bc6-0824-467c-8022-b344014923cd"}}},"blocks":[{"key":"7a5eh","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"898co","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"b1es3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'b',
    dateCreated: '2018-01-18T01:32:19.210Z',
    attachedFiles: [
      {
        id: '6c605ea1-fbef-11e7-98f8-cbc1e8ec8c63',
        awsKey: '1516239138408Screen Shot 2018-01-16 at 4.59.53 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239138408Screen%20Shot%202018-01-16%20at%204.59.53%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=fb69da3a319abea705701cb3f57d20f1d6b9460e57b33bada8f5adf7d7808fba',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516239138408Screen%20Shot%202018-01-16%20at%204.59.53%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4a2b8adebf03431cf9e563df4cba9a518475293e8c8b7a5baca81869fe9637f6',
        fileName: 'Screen Shot 2018-01-16 at 4.59.53 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'f6a26bf0-fbed-11e7-98f8-cbc1e8ec8c63',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"4vsm2":{"key":"4vsm2","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"4vsm2","anchorOffset":0,"focusKey":"4vsm2","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"4vsm2","anchorOffset":0,"focusKey":"4vsm2","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516150798000,"lastModifiedDate":"2018-01-17T00:59:58.000Z","name":"Screen Shot 2018-01-16 at 4.59.53 PM.png","size":192943,"thumbnailUrl":null,"type":"image/png","uniqueKey":"18b36c8b-050e-405f-b5af-d2942aab0d89"}}},"blocks":[{"key":"4vsm2","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3prf","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"24gv0","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'a',
    dateCreated: '2018-01-18T01:21:52.175Z',
    attachedFiles: [
      {
        id: 'f6a26bf1-fbed-11e7-98f8-cbc1e8ec8c63',
        awsKey: '1516238511280Screen Shot 2018-01-16 at 4.59.53 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516238511280Screen%20Shot%202018-01-16%20at%204.59.53%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d48ccd74678d2e2b821145cc68ee3efe657ec4f849c16c55286b9177ff9d80ae',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516238511280Screen%20Shot%202018-01-16%20at%204.59.53%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=202188f3d39fdfe45b8a0edc66cdce71312f1508f84b8f9034d81fa7a7b74b68',
        fileName: 'Screen Shot 2018-01-16 at 4.59.53 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '08d0f870-fbd8-11e7-8a10-fd37cc454d8e',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"9d7gc","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-17T22:44:53.751Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '874f21a0-fbd7-11e7-8a10-fd37cc454d8e',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{},"blocks":[{"key":"fmmep","text":"Test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'Test',
    dateCreated: '2018-01-17T22:41:16.474Z',
    attachedFiles: null,
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01161570',
      first_name: 'Adrian',
      last_name: 'Aguirre',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T19:44:53.555+0000',
      last_modified_gmt: '2018-01-31T19:44:53.555+0000',
      organizational_unit_name: 'MN -  Software Engineering',
      title: 'Sr. Web Software Engineer',
      business_area_id: '248',
      search_result_photo_url:
        'https://i.pravatar.cc/300',
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"pernr":"01161570","first_name":"Adrian","last_name":"Aguirre","first_alt":null,"last_alt":null,"last_login_gmt":"2018-01-29T20:39:10.246+0000","last_modified_gmt":"2018-01-29T20:39:10.246+0000","organizational_unit_name":"MN -  Software Engineering","title":"Sr. Web Software Engineer","business_area_id":"248","search_result_photo_url":"https://i.pravatar.cc/300","settings":"[{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"comment\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStoriesAssignedToMe\\",\\"id\\":\\"note\\",\\"email\\":false,\\"browser\\":true,\\"sms\\":false},{\\"type\\":\\"notification\\",\\"groupId\\":\\"allStories\\",\\"id\\":\\"privatestory\\",\\"email\\":true},{\\"key\\":\\"unit\\",\\"id\\":2,\\"value\\":\\"Digital\\",\\"type\\":\\"profile\\"}]","email":"ADRIAN.A.AGUIRRE@ABC.COM","work_phone":null,"work_cell":null,"personal_cell":null,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==","admin":true,"preferredFirstname":"Adrian","preferredLastname":"Aguirre"},{"key":"role","id":7,"value":"Cutting Producer","type":"profile"}]',
      email: 'ADRIAN.A.AGUIRRE@ABC.COM',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar:
        'data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCABIAEgDASEAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQcABAYBAwII/8QANhAAAQMDAgMFBwALAAAAAAAAAQIDBAAFEQYhEjFBEyJRYYEHMnGRobHBFBUWIyRCQ0Ri0eH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEBQD/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIRAyExEiJB/9oADAMBAAIRAxEAPwBwVKY8BdZXhdjsMiYyAXgOFvPIE9fSvz5c71LuEhTsuU68on3lqJJNBhKKZEptYXHkOIUNwULKT9KN2PXGo7M8hSJ7shoHdmSouIV5b7j0NE8PXTWoIWobY1LhOoKlJHatBWS0rqkjnz+dFDRAcNSiAtYr5NKMIrVl0uF+1ZKgCStLJeLSW891ITz2+dFbboi2NjjdbU+rrxnb5CodLaeI1cOapay4/pS1KTgwWx8BisxqDSTLLa1wypON+BRyPSki3pbpxWeAfRV6k6c1Iy62SW3D2TzfRSf9g71+grbNauEREhk91QzWpHOZZNSmAWjXPOlGEc3DLXtGuzaxwpZedXnwBOR961DGobSyOBUtOfEJJB+lZbW0b+DSj0Ivy46IJmLdSGMZ4/8AlZm43q3Pg8Lq8HbiLagPmRQUl7pZhh2YnBqFQX/TKlp8/D706tAx3WbKku5724B8K1ScqvpozUpxS0a4fDxpQisegpe1lfHyApuSEqbyPeHI8/MVWVb7oXwEPlpkE/um0gDHTeslV/R0uUNTjCE0upgNNckpcwSOdC/1XOEgq/SnXWycltzcAeFKmVqdBFxtvFfg61hKUR8kY5nf8U2tLOh2yxyBjuj7Vrh+HN6zj0KmpTkS1XDQCY69Q24lyUpKeEq3SfI74+dU7hdotvjBT576geEAZJrFSxnW52mtMjM1G87H4ExVnvZ4eHp8aMW++R7hDDfeafCOS9icfmiF1n1ASe+kPuqCu8pAR6ZJNMbQ7DjFha7Ukle4B6CtEfDm9ntB4mpVSBcr5NAYE6ogGdaH+ySDIaSVtHrkbketJ8XBq5XRtuasoPDw5JwM9Kh0nfUaeF54z1fkIQstfw3ADjiBJ+tC7pKjxpqG4zgV3MlaTsTSSm2au3b9L094yVSZDKVk98gU6LWkNwGUpGAE1pk5tP0sk1KcQv1w0BihfJzdttUiU6OJKEHu5xknYD60kdaWN2Is3OGCWcjtUp5oPj8KlbykW5zstmUNwVsByFEtPWd+6Pl9zKGUHmevwrz/AJR6U7eGy0zbRIvgbI7rfeH4pptpDbaUDkBiqSRr6dqUwoQHgKy+qNf2DT4Wh+UJcpP9tGIWrP8AkeSfU+lAYx1u1tI1pIlRXo7UaM2ApDCTxFQOQSpR5+gA3o0plDkcsuJCklPDg75FS6TvqL8bUv8AL/0CfsxaWkK4YaDnocnFeqW0RmylCAlPIJHSppOmamlEtgK+zJloaF0tj62JEZSQSN0rSTyUDsRRCxe2BKuFu/QOHp28T7lB/BrSjmsYFkv1rvrPa2qa1JxzQDhafik7ipRAJfU/tHv9+StkyRCiq2LEXKQR4KV7yvnjyrIFVAJesV2kWa5NTI2CpGykHktJ5pNOOw3y3X2OHILwLgGVsK2cQfMdfiNq8HSxLdQHOyZAKgcLUeSPLzNDZ0ppodo+OzbA9/8AlHxpUsY7umsZltbXCLJ02oQ5jDwU8gYbcBJG53HOl9TEz0ZecYcS4y4ptaeSkKII9RUrx4//2Q==',
      admin: false,
      preferredFirstname: 'Adrian',
      preferredLastname: 'Aguirre'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: 'd630e070-fbd6-11e7-98f8-cbc1e8ec8c63',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"c4u1k":{"key":"c4u1k","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"c4u1k","anchorOffset":0,"focusKey":"c4u1k","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"c4u1k","anchorOffset":0,"focusKey":"c4u1k","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516136090000,"lastModifiedDate":"2018-01-16T20:54:50.000Z","name":"new_update_message.png","size":148325,"thumbnailUrl":null,"type":"image/png","uniqueKey":"751c91fd-c34c-47e0-8349-08c38aca9aa5"}}},"blocks":[{"key":"c4u1k","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3e10r","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"7vgg9","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'b',
    dateCreated: '2018-01-17T22:36:19.319Z',
    attachedFiles: [
      {
        id: 'd630e071-fbd6-11e7-98f8-cbc1e8ec8c63',
        awsKey: '1516228578445new_update_message.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516228578445new_update_message.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b21f60d2bb2cf1a12327e27b37db50e31fc1c5b63e8f6cd82957c45efc320ccd',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516228578445new_update_message_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=d60b8ccf63a7063581fceea8c7234fb716aa3a42040d8c688cc6a0f5993cb389',
        fileName: 'new_update_message.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  },
  {
    id: '8b1cc0e0-fbd6-11e7-98f8-cbc1e8ec8c63',
    storyId: '341d7c00-d92e-11e7-8224-23e86ea44d6f',
    storySlug: 'Test',
    text:
      '{"entityMap":{"0":{"type":"image","mutability":"ENITITY_MUTABILITY_IMMUTABLE","data":{"base64Src":"","contentState":{"entityMap":{},"blockMap":{"fgnrl":{"key":"fgnrl","type":"unstyled","text":"","characterList":[],"depth":0,"data":{}}},"selectionBefore":{"anchorKey":"fgnrl","anchorOffset":0,"focusKey":"fgnrl","focusOffset":0,"isBackward":false,"hasFocus":false},"selectionAfter":{"anchorKey":"fgnrl","anchorOffset":0,"focusKey":"fgnrl","focusOffset":0,"isBackward":false,"hasFocus":false}},"lastModified":1516150798000,"lastModifiedDate":"2018-01-17T00:59:58.000Z","name":"Screen Shot 2018-01-16 at 4.59.53 PM.png","size":192943,"thumbnailUrl":null,"type":"image/png","uniqueKey":"c929a7ef-6532-4448-a25d-9596c62ee7dd"}}},"blocks":[{"key":"fgnrl","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"21goq","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"9futa","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    subject: 'a',
    dateCreated: '2018-01-17T22:34:13.358Z',
    attachedFiles: [
      {
        id: '8b1cc0e1-fbd6-11e7-98f8-cbc1e8ec8c63',
        awsKey: '1516228452507Screen Shot 2018-01-16 at 4.59.53 PM.png',
        assetUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516228452507Screen%20Shot%202018-01-16%20at%204.59.53%20PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=2a98f20acdc94ff5d8663d8f190bf2e5df6531427875c7d79f2d1bea5b4a5c88',
        thumbnailUrl:
          'https://storyline-west.s3-us-west-2.amazonaws.com/environments/local/processed_attachments/1516228452507Screen%20Shot%202018-01-16%20at%204.59.53%20PM_thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180131T194505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=AKIAIJKAUM3JH67LM62Q%2F20180131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8b62ad8e4197c212b317c6d9cda1657fd708fa7d5d1799d77bbb7b170ada0a94',
        fileName: 'Screen Shot 2018-01-16 at 4.59.53 PM.png',
        attachedFileKey: null,
        details: null,
        malwareScanDetails: {
          status: 'COMPLETE',
          isInfected: false
        }
      }
    ],
    comments: [],
    status: 0,
    attachedFilesMetadata: null,
    employee: {
      pernr: '01202920',
      first_name: 'Alan',
      last_name: 'Chen',
      first_alt: null,
      last_alt: null,
      last_login_gmt: '2018-01-31T00:45:22.756+0000',
      last_modified_gmt: '2018-01-31T00:45:22.756+0000',
      organizational_unit_name: null,
      title: null,
      business_area_id: null,
      search_result_photo_url: null,
      settings:
        '[{"type":"notification","groupId":"allStories","id":"comment","email":false,"browser":true,"sms":false},{"type":"notification","groupId":"allStories","id":"privatestory","email":true},{"type":"notification","groupId":"allStoriesAssignedToMe","id":"note","email":false,"browser":true,"sms":false},{"key":"unit","id":2,"value":"Digital","type":"profile"},{"key":"role","id":16,"value":"Other","type":"profile"}]',
      email: 'alan.x.chen.-nd@abc.com',
      work_phone: null,
      work_cell: null,
      personal_cell: null,
      avatar: null,
      admin: false,
      preferredFirstname: 'Alan',
      preferredLastname: 'Chen'
    },
    employeeBehalf: null,
    isNew: false
  }
];
