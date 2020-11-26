import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { openModal } from '../../components/modal';
import EditModal from './modals/edit-modal.js';
import DeleteModal from './modals/delete-modal';
import { deleteItem, editItem } from './actions';

class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit() {
        const { id, name, youtube } = this.props;
        this.props.dispatch( openModal({
            title: 'Редактировать',
            content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem } />
        }) );
    }

    remove() {
        const { id, name } = this.props;
        this.props.dispatch( openModal({
            title: 'Удалить элемент?',
            content: <DeleteModal id={ id } name={ name } onSuccess={ deleteItem } />
        }) );
    }

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/list/${ this.props.id }`}>{ this.props.name }</Link></td>
                <td>
                    <button className='btn btn-success' onClick={ this.edit }>
                        <i className='glyphicon glyphicon-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={ this.remove }>
                        <i className='glyphicon glyphicon-remove' />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
