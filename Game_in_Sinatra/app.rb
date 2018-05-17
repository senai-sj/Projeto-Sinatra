# encoding: utf-8

require 'sinatra'

get '/' do
	'Hello World'
end

get '/cadastrar' do
	erb :'home/index.html.erb'
end