import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises,
    category: null,
    exercise: {}
  };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, ex) => {
        const { muscles } = ex;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], ex]
          : [ex];

        return exercises;
      }, {})
    );
  }
  handleCategorySelect = category => {
    this.setState({
      category
    });
  };
  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
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