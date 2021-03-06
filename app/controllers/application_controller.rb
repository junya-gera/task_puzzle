class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:image])
  end

  def after_sign_in_path_for(resource)
    user_path(id: current_user.id)
  end

  def after_sign_out_path_for(resource)
    new_user_session_path
  end

end
