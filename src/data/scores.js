import { fromJS, OrderedMap } from 'immutable';

export default fromJS({
  courses: {
    Tinsley: OrderedMap({
      1: {
        par: 4
      },
      2: {
        par: 3
      },
      3: {
        par: 5
      },
      4: {
        par: 4
      },
      5: {
        par: 4
      },
      6: {
        par: 4
      },
      7: {
        par: 4
      },
      8: {
        par: 4
      },
      9: {
        par: 3
      },
      10: {
        par: 4
      },
      11: {
        par: 4
      },
      12: {
        par: 4
      },
      13: {
        par: 4
      },
      14: {
        par: 4
      },
      15: {
        par: 3
      },
      16: {
        par: 5
      },
      17: {
        par: 3
      },
      18: {
        par: 4
      }
    })
  },
  rounds: {
    '2019-06-22': {
      course: 'Tinsley',
      scores: {
        Matt: OrderedMap({
          1: 7,
          2: 4,
          3: 5,
          4: 5,
          5: 3,
          6: 3,
          7: 4,
          8: 5,
          9: 4,
          10: 4,
          11: 4,
          12: 5,
          13: 5,
          14: 7,
          15: 6,
          16: 6,
          17: 4,
          18: 4
        }),
        Mark: OrderedMap({
          1: 7,
          2: 6,
          3: 8,
          4: 7,
          5: 4,
          6: 5,
          7: 10,
          8: 5,
          9: 4,
          10: 6,
          11: 6,
          12: 5,
          13: 6,
          14: 6,
          15: 4,
          16: 7,
          17: 5,
          18: 5
        }),
        Pete: OrderedMap({
          1: 7,
          2: 6,
          3: 6,
          4: 8,
          5: 5,
          6: 8,
          7: 5,
          8: 8,
          9: 4,
          10: 4,
          11: 5,
          12: 8,
          13: 5,
          14: 6,
          15: 3,
          16: 10,
          17: 5,
          18: 7
        })
      }
    }
  }
});
