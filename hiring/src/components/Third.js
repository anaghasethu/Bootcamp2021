import './Start.css';
import { Link } from 'react-router-dom';
import Button from "@restart/ui/esm/Button";
import React, { Component } from 'react';
import logo from './index.jpeg';
export default class Third extends Component {

    userData;

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCollege = this.onChangeCollege.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            college: '',
            place: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangeCollege(e) {
        this.setState({ college: e.target.value })
    }
    onChangePlace(e) {
        this.setState({ place: e.target.value })
    }

    
    onSubmit(e) {
        e.preventDefault()

    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                college: this.userData.college,
                place: this.userData.place
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: '',
                college: '',
                place: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="px-5 py-3">
                <div className="d-flex justify-content-start">
                    <img src={logo} alt="company logo" height={60}/>
                </div>
                <div className="one shadow p-3 mb-5 bg-white rounded-3">
                <div className="d-flex justify-content-center py-5">

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       
                        <input type="text" placeholder="place" className="form-control my-3" value={this.state.place} onChange={this.onChangePlace} />
                    </div>
                </form>
                
            </div>
            </div>
            
            <div className="d-flex justify-content-between">
            
            <button  className="btn btn-dark mx-5 px-5 my-3">
            <Link to='/Resume' className="btn btn-dark">
               <label>Prevoius</label>
            </Link>
            </button>
            
            
            <button  className="btn btn-dark mx-5 px-5 my-3">
            <Link to='/Third' className="btn btn-dark">
               <label>Submit</label>
            </Link>
            </button>
          
            </div>
            </div>
            
        )
    }
}