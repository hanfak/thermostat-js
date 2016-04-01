require 'sinatra'
require 'json'

class Themostat < Sinatra::Base
  enable :sessions

  get '/' do
    erb(:index)
  end

  post '/temperature' do
    session[:temperature] = params[:temperature]
    session[:powerSaveMode] = params[:powerSaveMode]
  end

  get '/temperature.json' do
    { temperature: session[:temperature],
       powerSaveMode: session[:powerSaveMode] }.to_json
  end

  run! if app_file == $0
end
