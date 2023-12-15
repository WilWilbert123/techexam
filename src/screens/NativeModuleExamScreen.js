import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NativeModules} from 'react-native';

const {MoviesModule} = NativeModules;

export default function NativeModuleExamScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesModule.getMovies().then(setMovies);
  }, []);

  return (
    <View>
      {movies.map((movie, index) => (
        <Text key={index}>{movie}</Text>
      ))}
    </View>
  );
}
