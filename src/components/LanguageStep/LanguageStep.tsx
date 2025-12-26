import { type JSX } from "react";

export default function LanguageStep(): JSX.Element {
	return (
		<div className="bg-black text-white font-display antialiased overflow-hidden h-screen w-screen flex flex-col items-center justify-center relative">
			<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 w-full h-full bg-linear-to-brrom-bd-green/5 via-background-dark to-background-dark"></div>
				<div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-bd-green/10 rounded-full blur-[120px]"></div>
				<div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-bd-red/10 rounded-full blur-[120px]"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200800px] circle-accent blur-[100px]"></div>
			</div>

			<div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-12">
				<div className="flex flex-col items-center gap-4 mb-8">
					<div className="w-20 h-20 rounded-full bg-surface-dark border border-bd-green/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,106,78,0.2)]">
						<span className="material-symbols-outlined text-4xl text-bd-green">mosque</span>
					</div>
					<h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-200 uppercase letter-spacing-widest">
						Select Language
					</h1>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-200 uppercase letter-spacing-widest">
						ভাষা নির্বাচন করুন
					</h1>
					<div className="h-1 w-16 bg-linear-to-r from-bd-green to-bd-red rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
					<a className="group relative flex items-center p-8! rounded-2xl bg-surface-dark border border-bd-green/20 hover:border-bd-red/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,42,65,0.15)] hover:-translate-y-1 overflow-hidden" href="#">
						<div className="absolute inset-0 bg-linear-to-r from-bd-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative z-10 flex items-center justify-between w-full">
							<div className="flex flex-col">
								<span className="text-xs font-medium text-bd-green uppercase tracking-widest mb-2 group-hover:text-bd-red transition-colors">Option 1</span>
								<span className="text-3xl md:text-4xl font-bold text-white group-hover:text-bd-red-dark transition-colors font-display">English</span>
								<span className="text-sm text-gray-500 mt-2 font-light group-hover:text-gray-400">Continue in English</span>
							</div>
							<div className="w-12 h-12 rounded-full border border-bd-green/30 group-hover:border-bd-red/50 flex items-center justify-center group-hover:bg-bd-red/10 transition-all">
								<span className="material-symbols-outlined text-gray-400 group-hover:text-bd-red transition-colors">arrow_forward</span>
							</div>
						</div>
					</a>

					<a className="group relative flex items-center p-8! rounded-2xl bg-surface-dark border border-bd-green/20 hover:border-bd-green/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,106,78,0.2)] hover:-translate-y-1 overflow-hidden" href="#">
						<div className="absolute inset-0 bg-linear-to-r from-bd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative z-10 flex items-center justify-between w-full">
							<div className="flex flex-col">
								<span className="text-xs font-medium text-bd-red uppercase tracking-widest mb-2 group-hover:text-bd-green transition-colors">Option 2</span>
								<span className="text-3xl md:text-4xl font-bold text-white group-hover:text-bd-green transition-colors font-bengali pt-1">বাংলা</span>
								<span className="text-sm text-gray-500 mt-2 font-light group-hover:text-gray-400 font-bengali">বাংলায় প্রবেশ করুন</span>
							</div>
							<div className="w-12 h-12 rounded-full border border-bd-green/30 group-hover:border-bd-green/50 flex items-center justify-center group-hover:bg-bd-green/10 transition-all">
								<span className="material-symbols-outlined text-gray-400 group-hover:text-bd-green transition-colors">arrow_forward</span>
							</div>
						</div>
					</a>
				</div>

				<div className="mt-12 text-center text-white text-xs md:text-sm max-w-md leading-relaxed">
					<p>Reliable Bangladeshi Scholars List</p>
					<p className="mt-2 font-bengali opacity-60">বিশুদ্ধ ইলমের সন্ধানে</p>
				</div>
			</div>
		</div>
	);
}
