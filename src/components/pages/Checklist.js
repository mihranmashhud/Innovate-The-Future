import React, { Component } from 'react';
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

import { Card, CssBaseline, Fab, withStyles, Hidden } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from 'mdi-material-ui';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block',
		padding: '20px'
	},
	document: {
		width: '100%'
	},
	page: {
		width: '100%',
		margin: 'auto'
	},
	buttons: {
		margin: 'auto',
		marginBottom: '20px'
	},
	button: {
		fontSize: '20px',
		margin: 'auto'
	},
	text: {
		width: '90%',
		margin: 'auto',
		marginBottom: '10pt',
		textAlign: 'center'
	},
	card: {
		// minWidth: "70%",
		// maxWidth: "90%",
		width: '100%'
		// marginTop: "20px"
	},
	icon: {
		marginRight: theme.spacing.unit,
		color: theme.palette.secondary.main,
		fontSize: '30pt'
	},
	leftFab: {
		position: 'fixed',
		left: '30pt',
		bottom: '30pt'
	},
	rightFab: {
		position: 'fixed',
		right: '30pt',
		bottom: '30pt'
	}
});

class Checklist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			numPages: null,
			pageNumber: 1
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	prevPage = () => {
		this.setState({ pageNumber: this.state.pageNumber - 1 });
	};

	nextPage = () => {
		this.setState({ pageNumber: this.state.pageNumber + 1 });
	};
	render() {
		const { classes } = this.props;
		const { pageNumber, numPages, width } = this.state;

		return (
			<main className={classes.layout}>
				<CssBaseline />
				<Card className={classes.card} elevation={1}>
					<Document
						file={require('./../../documents/IFStudentChecklist.pdf')}
						onLoadSuccess={this.onDocumentLoadSuccess}
						className={classes.document}>
						<Hidden smUp />
						<Page pageNumber={pageNumber} className={classes.page} width={width - 40} />
					</Document>
					{/* <Typography variant='body1' className={classes.text}>
            Page {pageNumber} of {numPages}
          </Typography> */}
				</Card>
				<Fab className={classes.leftFab} color='secondary' disabled={pageNumber <= 1} onClick={this.prevPage}>
					<ArrowLeft />
				</Fab>
				<Fab className={classes.rightFab} color='secondary' disabled={pageNumber >= numPages} onClick={this.nextPage}>
					<ArrowRight />
				</Fab>
			</main>
		);
	}
}

export default withStyles(styles)(Checklist);
