class PublicPage {
	HOME = '/'

	GENRES = `${this.HOME}/genres`
}

class AccountPage {
	ACCOUNT = '/account'

	SETTINGS = `${this.ACCOUNT}/settings`
}

export const PAGE = {
	PUBLIC: new PublicPage(),
	ACCOUNT: new AccountPage()
}
