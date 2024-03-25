import { Dispatch, SetStateAction, createContext, useState } from "react";
import { DefUser, IUser } from "../Models/User";

type Props = {
	children: React.ReactNode;
};

type Context = {
	user: IUser;
	setContext: Dispatch<SetStateAction<Context>>;
};

const initialContext: Context = {
	user: DefUser,
	setContext: (): void => {
		throw new Error("setContext function must be overridden");
	},
};

export const Maincontext = createContext(initialContext);

export const MainProvider = ({ children }: Props): JSX.Element => {
	const [contextState, setContext] = useState<Context>(initialContext);

	return (
		<Maincontext.Provider value={{ ...contextState, setContext }}>
			{children}
		</Maincontext.Provider>
	);
};
