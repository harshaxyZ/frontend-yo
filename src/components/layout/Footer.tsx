import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-display font-black">
                S
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">SAMVAD</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Master the art of conversation through hyper-realistic AI roleplays. Practice anywhere, anytime, without the anxiety.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Scenarios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} SAMVAD Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
