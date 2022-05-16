
let people = [
  {firstName: "John", lastName: "Doe", age: 50, phone: "333 4567111"},
  {firstName: "Alice", lastName: "Smith", age: 22, phone: "333 45667933"},
  {firstName: "Mark", lastName: "Joseph", age: 45, phone: "333 33446776"},
  {firstName: "Marion", lastName: "Justin", age: 45, phone: "333 4343433345"}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: people
    }
  }

  addPerson(person) {
    let people = this.state.people;

    people.push(person);

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <h1>Contact book</h1>
        <PeopleList people={this.state.people} />
        <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
      </div>
    )
  }
}

class PeopleList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
	
	updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let filteredPeople = this.props.people.filter(
      (person) => {
        var fullName = person.firstName.toLowerCase() + person.lastName.toLowerCase()
        return fullName.indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="people-list">
			 <div className="search">
				<input type="text" 
					className="search_input"
					value={this.state.search}
					onChange={this.updateSearch.bind(this)}
					placeholder="Enter name or lastname"
			  />
			 </div>
        <ul className="list">
          {filteredPeople.map((person)=> {
            return <Person person={person} />
          })}
			 </ul>
      </div>

    )
  }
}

class Person extends React.Component {
  render() {
    return (
      <li>
        <p>
          {this.props.person.firstName} <br />
          {this.props.person.lastName} <br />
          {this.props.person.phone}
        </p>
      </li>
    )
  }
}

class AddPerson extends React.Component {

  componentWillMount() {
    this.setState({
      firstName: "",
      lastName: "",
      phone: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPerson(this.state)
  }

  handleChange(data) {
    let state = this.state;
    let name = data.target.name;
    state[name] = data.target.value;
    this.setState(state);
  }

  render() {

    return (
		 <div className="person-add">
			<form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-field">
					<label>Name: </label>
					<input type="text"
					 name="firstName"
					 value={this.props.firstname}
					 onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div className="form-field">
					<label>Lastname: </label>
					<input type="text"
					 name="lastName"
					 value={this.props.lastname}
					 onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div className="form-field">
					<label>Phone: </label>
					<input type="text"
					 name="phone"
					 value={this.props.phone}
					 onChange={this.handleChange.bind(this)}
					/>
				</div>
			  <button type="submit">Add</button>
			</form>
		</div>
    )
  }
}

React.render(<App people={people} />, document.getElementById('app'));

