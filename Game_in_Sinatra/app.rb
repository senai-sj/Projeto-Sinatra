# encoding: utf-8

require 'sinatra'

get '/' do
	'Hello World'
end

get '/home' do
	erb :index
end