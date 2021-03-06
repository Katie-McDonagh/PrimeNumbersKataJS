// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
describe("PrimeFactorList", function () {
  it ("returns an empty list when given 1", function(){
    expect(primeFactorList(1)).toEqual([])
  })
  it ("returns [2] when given 2", function(){
    expect(primeFactorList(2)).toEqual([2])
  })

  it ("returns [3] when given 3", function(){
    expect(primeFactorList(3)).toEqual([3])
  })

  it ("returns [2,2] when given 4", function(){
    expect(primeFactorList(4)).toEqual([2,2])
  })

  it ("returns 5 when given 5", function(){
    expect(primeFactorList(5)).toEqual([5])
  })

  it ("returns [2,3] when given 6", function(){
    expect(primeFactorList(6)).toEqual([2,3])
  })

  it ("returns 7 when given 7", function(){
    expect(primeFactorList(7)).toEqual([7])
  })

  it ("returns [2,2,2] when given 8", function(){
    expect(primeFactorList(8)).toEqual([2,2,2])
  })

  it ("returns [3,3] when given 9", function(){
    expect(primeFactorList(9)).toEqual([3,3])
  })

});