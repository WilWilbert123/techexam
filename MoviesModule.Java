package com.reactnative;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

import java.util.Arrays;
import java.util.List;

public class MoviesModule extends ReactContextBaseJavaModule {
  public MoviesModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MoviesModule";
  }

  @ReactMethod
  public void getMovies(Promise promise) {
    List<String> movies = Arrays.asList("Movie 1", "Movie 2", "Movie 3");
    promise.resolve(movies);
  }
}
