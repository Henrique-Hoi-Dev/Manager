import React, { Component } from 'react';
import { FcViewDetails, FcRightUp2 } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import TechItem from './TechItem';
import { Container, Form, Button } from './styles';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [],
  };
  // Executado assim que o componetem aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  // Executado sempre que houver uma alteração nas props ou states ele faz a comparação das props e states anterior
  // com as nossas alterações e executa (this.props this.state)
  componentDidUpdate(_, PrevState) {
    if (PrevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //pega todo os state e faz do zero mais com as novas alteraçoes que sao passadas
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      //aqui declaramos para limpar nosso input
      newTech: '',
    });
  };

  // função para delete faz filtragem e delele o objeto
  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) });
  };

  render() {
    return (
      <Container>
        <h1>
          <FcViewDetails />
          Manager
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map((tech) => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
          <input
            placeholder="Enter your text..."
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <div>
            <Button type="submit" className="novo-repo">
              Submit... <FcRightUp2 size="20" />
            </Button>
            <button type="button" className="novo-repo">
              <Link className="nova-lista" to="/repository">
                New Repository
                <FcViewDetails size="20" />
              </Link>
            </button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default TechList;
