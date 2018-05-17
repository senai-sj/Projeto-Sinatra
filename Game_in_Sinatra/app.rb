# encoding: utf-8

require 'sinatra'

get '/' do
	'Hello World'
end

get '/cadastro' do
	 :'pages/index.html'
end