import React from 'react';

class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            weight: 83,
            height: 175,
            age: 32,
            gender: 'm',
            distance: 0,
            time: 0,
            calories: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    bmr (weight, height, age, gender) {
        
        // sanity check on the inputs
        if (weight + height + age === NaN) return 0;

        // calculate Mifflin-St Jeor Equation to give basal metabolic rate
        if (gender === 'm') {
            return (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            return (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
            
        
    }

    pace (distance, time) {
        
        if (isNaN(distance) || isNaN(time)) return 0;

        // given distance in m and time in minutes, returns pace in km/h
        return ( (distance / time) * 60 ) / 1000;
    }

    mets (pace, time) {
        
        if (isNaN(pace) || isNaN(time)) return 0;
        
        return (pace - .2) * (time / 60);
    }

    calories (bmr, mets) {

        if (isNaN(bmr) || isNaN(mets)) return 0;

        return bmr * mets / 24;
    }

    calculate (e) {
        e.preventDefault();
        let pace = this.pace(this.state.distance, this.state.time);
        let mets = this.mets(pace, this.state.time);
        let bmr = this.bmr(this.state.weight, this.state.height, this.state.age, this.state.gender);
        console.log('pace: ', pace, 'mets: ', mets, 'bmr: ', bmr);
        let calories = this.calories(bmr, mets);
        this.setState({
            calories: calories
        });

    }

    render () {
        return (
           
                <form className="ui form">
                <div className="fields">
                        <div className="field">
                            <label>Weight (kg)</label>
                            <input
                            type="number"
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleInputChange}
                            min="0"
                            max="300"
                            className="ui input" />
                        </div>
                        <div className="field">
                            <label>Height (cm)</label>
                            <input
                            type="number"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleInputChange}
                            min="0"
                            max="300" />
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input
                            type="number"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            min="1"
                            max="150" />
                        </div>
                        <div className="field">
                            <label>Gender</label>
                            <select name="gender">
                                <option value='m' selected>Male</option>
                                <option value='f'>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Distance (m)</label> 
                            <input
                            type="number"
                            name="distance"
                            value={this.state.distance}
                            onChange={this.handleInputChange}
                            min="0" />
                        </div>
                        <div className="field">
                            <label>Time (min)</label>
                            <input
                            type="number"
                            name="time"
                            value={this.state.time}
                            onChange={this.handleInputChange}
                            min="0" />
                        </div>
                    </div>
                        
                    <div className="fields">
                        <div className="field">
                            <button className="ui primary button" onClick={this.calculate}>Calculate</button>
                        </div>
                    </div>
                        
                
                    <div id="result" className="ui raised segment">
                        <h2>{Math.round(this.state.calories)} calories burned</h2>
                    </div>
                </form>
           
        );
    }


}

export default Calculator;