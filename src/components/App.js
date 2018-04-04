import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    category: null,
    exercise: {}
  };
  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, ex) => {
        const { muscles } = ex;
        exercises[muscles] = [...exercises[muscles], ex];
        // exercises[muscles] = exercises[muscles]
        //   ? [...exercises[muscles], ex]
        //   : [ex];

        return exercises;
      }, initExercises)
    );
  }
  handleCategorySelect = category =>
    this.setState({
      category
    });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));

  handleExerciseDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onSelectEdit={this.handleExerciseSelectEdit}
          onDelete={this.handleExerciseDelete}
          category={category}
          exercises={exercises}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
