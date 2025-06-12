class AuthOption {
	constructor(
		public readonly authType: string,
		public readonly token: string,
		public readonly expiresIn?: number,
		public readonly refreshToken?: string
	) {}
}
