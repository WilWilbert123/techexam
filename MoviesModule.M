#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MoviesModule, NSObject)

RCT_EXTERN_METHOD(getMovies:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
