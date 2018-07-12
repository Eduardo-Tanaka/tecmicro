import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

// Metadata
export interface RouteInfo {
	path: string;
	title: string;
	type: string;
	icontype: string;
	collapse?: string;
	children?: ChildrenItems[];
}

export interface ChildrenItems {
	path: string;
	title: string;
	ab: string;
	type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
	{
		path: '/dashboard',
		title: 'Dashboard',
		type: 'link',
		icontype: 'dashboard'
	},
	{
		path: '/posts',
		title: 'Posts',
		type: 'sub',
		icontype: 'question_answer',
		collapse: 'posts',
		children: [
			{ path: 'novo', title: 'Novo Post', ab: 'NP' },
			{ path: 'buscar', title: 'Buscar Posts', ab:'BP' }
		]
	},
	{
		path: '/enquete',
		title: 'Enquetes',
		type: 'link',
		icontype: 'assignment'
	}
];

@Component({
	selector: 'app-sidebar-cmp',
	templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
	public menuItems: any[];
	public menuExternal: any[] = [
		{
			url: 'http://moodle.universidade.caixa/enrol/index.php?id=250',
			title: 'Fórum UC',
			icontype: 'school',
			fa: false
		},
		{
			url: 'https://chat.caixa.gov.br/channel/tecmicro',
			title: 'Chat',
			icontype: 'public',
			fa: false
		},
		{
			url: 'https://ceptisp34.caixa/q2a/',
			title: 'Q2A',
			icontype: 'speaker_notes',
			fa: false
		},
		{
			url: 'http://blog.caixa/transformacaodigital/',
			title: 'Blog',
			icontype: 'info',
			fa: false
		},
		{
			url: 'http://fontes.des.caixa/users/sign_in',
			title: 'GitLab Des',
			icontype: 'fa fa-gitlab',
			fa: true
		},
		{
			url: 'http://git.universidade.caixa/users/sign_in',
			title: 'GitLabU UC',
			icontype: 'fa fa-gitlab',
			fa: true
		}
	];

	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}

	updatePS(): void  {
		if (window.matchMedia(`(min-width: 960px)`).matches) {
			const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
			let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
		}
	}
}
