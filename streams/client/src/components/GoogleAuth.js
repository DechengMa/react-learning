import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'366756357273-5btkk9ma79osri0a3fmp92aqfcu5v063.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					// Callback here, when onClick called, onAuthChange will also be called
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className='ui red google button'>
					<i className='google icon' />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className='ui red google button'>
					<i className='google icon' />
					Sign in with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);
