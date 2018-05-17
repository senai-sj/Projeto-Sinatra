# encoding: utf-8

require 'sinatra'

get '/' do
	:'pages/index.html'
end

get '/cadastro' do
	:'pages/cadastro.html'
end

get '/login' do
	:'pages/login.html'
end