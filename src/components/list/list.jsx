import React from 'react';
import ListItem from './listitem';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.refresh();
    }

    refresh() {
        /**
         * In deze functie mag je je data gaan proberen te laden met fetch()
         * Als je de data binnen hebt dan moet je de state updaten met deze code:
         * this.setState({ items : items });
         *
         * uiteraard help ik met alle plezier. Dus roep me erbij als het niet lukt
         */
        fetch("http://localhost:8081/")
            .then(res => res.json())
            .then(res => this.setState({ items: res }));
    }

    renderItem = (item, i) => (
        <ListItem
            key={i}
            {...item}
        />
    );

    render() {
        return (
            <div className="list">
                <div className="list__label">
                    {this.props.label}
                </div>
                {this.state.items.map(this.renderItem)}
            </div>
        );
    }
}

export default List;