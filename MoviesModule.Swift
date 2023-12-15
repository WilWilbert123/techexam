import Foundation

@objc(MoviesModule)
class MoviesModule: NSObject {
  @objc func getMovies(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let movies = ["Movie 1", "Movie 2", "Movie 3"]
    resolve(movies)
  }
}
